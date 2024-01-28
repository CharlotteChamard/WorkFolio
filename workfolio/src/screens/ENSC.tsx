import { YoutubeVideo } from "../component/YoutubeVideo"
import { NavBarre } from '../component/NavBarre';

export const ENSC = () => {
    return (
        <main className="ENSC">
            <NavBarre />
            <YoutubeVideo id="vDyU8SQyf3U" />
            <YoutubeVideo id="HfuQGzG_huU" />
        </main>
    );
}