import { useEffect, useState } from "react";
import MultiSelect, { Option } from "../common/Select";
import { useEntityCrud } from "../hooks/useEntityCrud";


export default function Home() {

    const { readData: readDataCoins } = useEntityCrud('coins');
    const [options, setOptions] = useState<Option[] | null>();
    const [isLoading, setIsLoading] = useState(false);

    const [selectedValue, setSelectedValue] = useState<Option[] | null>();
    const handleChange = (selected: Option[]) => {
        setSelectedValue(selected);
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setIsLoading(true);
        readDataCoins().then((res: any) => {
            setIsLoading(false);
            if (res.status === 200) {
                let allItems: any[] = [];
                res.data
                    .slice(0, 200)
                    .sort((a: any, b: any) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
                    .map((item: any) => {
                        allItems?.push({
                            label: item.name,
                            value: item.id
                        });
                    })
                setOptions(allItems)
            }
        }).finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <div className="App w-2/5 pt-6">
            {isLoading && <p className="mb-0">please wait until data upload ... </p>}
            <MultiSelect
                options={options || []}
                onChange={handleChange}
                value={selectedValue}
                isSelectAll={true}
                menuPlacement={"bottom"}
                isLoading={isLoading}
            />
        </div>
    );

}

