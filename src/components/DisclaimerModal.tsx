import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { GraduationCap } from "lucide-react";

export default function DisclaimerModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem("jiju-disclaimer-seen");
    if (!hasSeenDisclaimer) {
      setOpen(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem("jiju-disclaimer-seen", "true");
    setOpen(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
          </div>
          <AlertDialogTitle className="text-center text-xl">
            Student Project Disclaimer
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-base leading-relaxed">
            This website is created as part of a <strong>student project</strong> for <strong>educational purposes only</strong>. 
            <br /><br />
            It is not a real hospital website and should not be used for actual medical services or appointments.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="sm:justify-center">
          <AlertDialogAction onClick={handleClose} className="px-8">
            I Understand
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
