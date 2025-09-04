import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from 'react';

type FromWrapper = {
  children: React.ReactNode;
  wrapperClassName?: string;
};

function DemoForm({ children, wrapperClassName }: FromWrapper) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={wrapperClassName}>{children}</div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Request Demo</DialogTitle>
          <DialogDescription>
            Request for Noori AI and we&apos;ll get back to you when we&apos;re done.
          </DialogDescription>
        </DialogHeader>

        <form
          className="grid gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            // handle submit here (fetch/axios/etc)
          }}
        >
          <div className="grid gap-3">
            <Label htmlFor="name-1">Name</Label>
            <Input id="name-1" name="name" defaultValue="" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email-1">Email</Label>
            <Input id="email-1" name="email" defaultValue="" />
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Submit
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DemoForm;