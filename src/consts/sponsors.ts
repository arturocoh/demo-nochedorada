import type { Sponsors } from "../types/sponsors";

import Kick from "../assets/sponsors/kick.svg"

export const SPONSORS: Sponsors[] = [
    {
        id: "kick",
        name: "kick",
        url: "https://www.kick.com",
        image:{
            logo: Kick,
            width: 200,
            height: 200,
        }
    }
]