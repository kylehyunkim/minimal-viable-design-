
export interface Service {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

export interface Testimonial {
  id: string;
  number: string;
  text: string;
  author: string;
  role: string;
  company: string;
  link?: string;
}
