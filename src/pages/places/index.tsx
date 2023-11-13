import { CityData } from "../api/cities";

export default function PlaceListPage({
  cityDatas,
}: {
  cityDatas: CityData[];
}) {
  return (
    <div className="px-4 md:max-w-5xl mx-auto py-8">
      <ul className="divide-y divide-black-200">
        {cityDatas.map((city: any) => (
          <li key={city.id} className="flex justify-between gap-x-4 py-4">
            <div>
              <div>{city.city}</div>
              <div className="text-sm font-semibold text-gray-500">
                {city.country}({city.admin_name})
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-500">
                {city.population}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getStaticProps() {
  try {
    const cityDatas = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/cities`
    ).then((res) => res.json());
    return {
      props: {
        cityDatas,
      },
      revalidate: 60,
    };
  } catch (e) {
    console.log(e);
    return;
  }
}
