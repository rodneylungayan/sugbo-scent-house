import { notesStrip } from "@/content/home";
import { Marquee } from "../ui/Marquee";

export function NotesMarquee() {
  return <Marquee items={notesStrip} label="Some of the notes in our scents" />;
}
