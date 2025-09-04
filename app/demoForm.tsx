"use client";
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
import React, { useState, useEffect } from "react";

import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type FromWrapper = {
  children: React.ReactNode;
  wrapperClassName?: string;
};

function DemoForm({ children, wrapperClassName }: FromWrapper) {
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setVisible(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(() => setSubmitted(false), 300);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className={wrapperClassName}>{children}</div>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Request Demo</DialogTitle>
            <DialogDescription>
              Request for Noori AI and we&apos;ll get back to you when
              we&apos;re done.
            </DialogDescription>
          </DialogHeader>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email-1">Email</Label>
              <Input id="email-1" name="email" />
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
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

      {submitted && (
        <div
          className={`fixed bottom-4 right-4 max-w-sm transition-opacity duration-300 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Alert>
            <CheckCircle2Icon className="h-4 w-4 text-green-600" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              Your demo request has been submitted.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </>
  );
}

export default DemoForm;
