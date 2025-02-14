import { youtube } from "@googleapis/youtube";

const fetchWithNextConfig = (nextConfig?: NextFetchRequestConfig): typeof fetch => (input, params = {}) => {
    return fetch(input, { ...params, next: nextConfig });
};

const YouTubeAPIClient = youtube({
    version: "v3",
    auth: process.env.YOUTUBE_API_KEY,
    fetchImplementation: fetchWithNextConfig()
});

export const APIYoutube = {
    course: {
        getAll: async () => {

            const { data } = await YouTubeAPIClient.playlists.list({
                maxResults: 50,
                part: ["snippet"],
                channelId: process.env.YOUTUBE_CHANNEL_ID,
            }, { fetchImplementation: fetchWithNextConfig({ revalidate: 60 * 60 * 48 }) });

            const courses = (data.items || []).map((playListItem) => ({
                id: playListItem?.id || '',
                title: playListItem.snippet?.title || '',
                description: playListItem.snippet?.description || '',
                thumbnail: playListItem.snippet?.thumbnails?.default?.url || '',
            }));

            return courses.filter((course) => course.description?.includes("#CODARSE"));
        }
    }
};