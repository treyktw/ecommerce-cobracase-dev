'use client'

import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import { useUploadThing } from "@/lib/uploadthing";
import { cn } from "@/lib/utils";
import { Image, ImageIcon, Loader2, MousePointerSquareDashed } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import Dropzone, { FileRejection } from "react-dropzone";



const Page = () => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const router = useRouter();
  
  const { toast } = useToast();

  const [isPending, startTransition] = useTransition();

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId
      startTransition(() => {
        router.push(`/configure/design?id=${configId}`)
      })
    },
    onUploadProgress(p) {
      setUploadProgress(p)
    }
  });

  const onDropRejected = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles

    setIsDragOver(false)

    toast({
      title: `${file.file.type} type is not supported`,
      description: "Please choose a PNG, JPG, or JPEG  image instead",
      variant: "destructive"
    })
    
    console.log("rejected")
  }

  const onDropAccepted = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, { configId: undefined })
    
    setIsDragOver(false)
    
    console.log("accepted")
  }

  return (
    <div className={cn(
      "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center items-center flex-col cursor-pointer", {
      "ring-blue-900/25 bg-blue-900/10": isDragOver
    }
    )}>
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div className="h-full w-full flex-1 flex flex-col items-center justify-center" {...getRootProps()}>
              {isDragOver ? (
                <MousePointerSquareDashed className="h-6 2-6 text-zinc-500 mb-2" />
              ) : isUploading || isPending ? (
                <Loader2 className="animate-spin w-6 h-6 text-zinc-500" />
              ) : (
                <ImageIcon className="w-6 h-6 text-zinc-500 mb-2" />
              )}
              <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <p className="">Uploading...</p>
                    <Progress className="mt-2 w-40 h-2 bg-gray-300" value={uploadProgress} />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center">
                    <p>Redirecting Please Wait</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className="font-semibold">Drop File</span>
                  </p>

                ) : (
                  <p>
                    <span className="font-semibold">Click To Upload{" "}</span>
                    Or Drag and Drop
                  </p>
                )}

              </div>

              {isPending ? null : <p className="text-xs text-zinc-500">PNG JPG JPEG</p>}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  )
}

export default Page;