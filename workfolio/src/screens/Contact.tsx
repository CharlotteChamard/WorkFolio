import { SocialLinks } from "../component/SocialLinks";
import { NavBarre } from '../component/NavBarre';

export const Contact = () => {
    return (
        <main className="Contact">
            <NavBarre />
            <h3>Contact</h3>
            <p>
                Basée sur Tours et Bordeaux<br />
                Email : charlotte.chamard@ensc.fr <br />
                <SocialLinks />
            </p>
        </main>
    );
}