type Author = {
  name: string;
  role: string;
};

export type Metadata = {
  title: string;
  description: string;
  authors: Author[];
};

export interface SocialIconsProps {
  contiainerStyles?: string;
  iconsStyles?: string;
  imgSrc?: string;
}
