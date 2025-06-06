type sponsorId =
"kick"

type sponsorName=
"kick"

export interface Sponsors{
    id: sponsorId
    name: sponsorName
    url: string
    image: {
        logo: any
        width: number
        height: number
    }
}