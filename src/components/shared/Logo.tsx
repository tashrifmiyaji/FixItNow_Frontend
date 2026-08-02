import Link from "next/link";
import { Wrench } from "lucide-react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="rounded-lg bg-primary p-2 text-primary-foreground">
        <Wrench size={22} />
      </div>

      <div>
        <h2 className="text-xl font-bold leading-none">FixItNow</h2>
        <p className="text-xs text-muted-foreground">
          Home Service Platform
        </p>
      </div>
    </Link>
  );
};

export default Logo;