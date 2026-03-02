export interface Course {
  id: string;
  title?: string | null | undefined;
  description?: string | null | undefined;
  duration?: number | null | undefined;
  authors?: string[] | null | undefined;
  creationDate?: string | null | undefined;
}
