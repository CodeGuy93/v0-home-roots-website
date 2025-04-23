import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HomeRoots. All rights reserved.
          </p>
        </div>

        <div className="mt-4 flex justify-center space-x-6 md:mt-0">
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}
