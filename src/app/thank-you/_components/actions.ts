"use server";

import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const GetPaymentStatus = async ({ orderId }: { orderId:string }) =>  {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if(!user?.id || !user.email) {
    throw new Error("You need to be Logged in to View This Page")
  };

  const order = await db.order.findFirst({
    where: {
      id: orderId,
      userId: user.id
    },
    include: {
      billingAddress: true,
      configuration: true,
      shippingAddress: true,
      user: true
    }
  });

  if(!order) throw new Error("This Order Does Not Exist");

  if(order.isPaid) {
    return order
  } else {
    return false
  };

};