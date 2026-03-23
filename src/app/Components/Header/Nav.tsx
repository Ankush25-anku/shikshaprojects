import Link from 'next/link';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">

      <li>
        <Link href="/" onClick={() => setMobileToggle(false)}>
          Home
        </Link>
      </li>

      <li>
        <Link href="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>

      <li>
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
      </li>

      <li>
        <Link href="/pricing" onClick={() => setMobileToggle(false)}>
          Pricing
        </Link>
      </li>

      <li>
        <Link href="/faq" onClick={() => setMobileToggle(false)}>
          FAQ
        </Link>
      </li>

      <li>
        <Link href="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>

      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>

    </ul>
  );
}