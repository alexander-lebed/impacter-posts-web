// @flow

type MediaType = {
    width: number,
    height: number,
    description: string,
    image: string,
    version: string
}

export type PostType = {
    id: string,
    type: string,
    description: string,
    impacter_id: string,
    data: {
        media: Array<MediaType>
    }
}