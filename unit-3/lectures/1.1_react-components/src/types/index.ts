export interface HeaderProps {
  title?: string;
  subtitle?: string;
}

// CHANGE FROM

// export interface NavbarProps {
//   links: { id: number; label: string; href: string }[];
// }

// TO BELOW

export interface NavLink {
  id: number;
  label: string;
  href: string;
}

export interface NavbarProps {
  links: NavLink[];
}
