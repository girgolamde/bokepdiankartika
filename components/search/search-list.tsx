import MessageBox from "../message-box";
import VideoCard from "../video-card";
import doodstream from "@/lib/doodstream";

const SearchCardList = async ({
    query,
    banner,
}: {
    query: string;
    banner?: boolean;
}) => {
    const data = await doodstream.search({ query });

    return (
        <div className="flex flex-col"><script
      dangerouslySetInnerHTML={{
         __html: `(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1078976})`,
      }}
   /><Script data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"/><ins id="1078976" data-width="300" data-height="112"></ins>
            {banner && (
                <div className="my-6 mb-8 text-center">
                    <h1 className="text-xs md:text-sm font-bold text-gray-600 uppercase tracking-wider">
                        Search Results
                    </h1>
                    <h1 className="text-sm md:text-xl uppercase">
                        Found {data.result.length} videos for &apos;{query}
                        &apos;
                    </h1>
                </div>
            )}
            {data.result.length ? (
                <div className="grid grid-cols-2 gap-0 md:grid-cols-3 md:gap-3 xl:grid-cols-4">
                    {data.result.map((video: any) => {
                        return (
                            <VideoCard
                                key={video.file_code}
                                video={video}
                            ></VideoCard>
                        );
                    })}
                </div>
            ) : (
                <MessageBox title="No results found" variant="info">
                    <p className="text-center">Try a shorter search term.</p>
                </MessageBox>
            )}
        </div>
    );
};

export default SearchCardList;
