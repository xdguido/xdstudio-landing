'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from '@/components/ui/drawer';

export function ContactForm({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Get in touch</DrawerTitle>
          <DrawerDescription>
            Fill out the form below and we'll get back to you shortly.
          </DrawerDescription>
        </DrawerHeader>
        <div className="px-4 space-y-4">
          <form className="space-y-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea
              placeholder="Tell us about your project"
              className="min-h-[120px]"
            />
          </form>
        </div>
        <DrawerFooter>
          <Button className="w-full bg-primary text-primary-foreground">
            Send Message
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
