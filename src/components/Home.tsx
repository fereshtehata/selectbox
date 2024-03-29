import { useEffect, useState } from "react";
import MultiSelect, { Option } from "../common/Select";
import { useEntityCrud } from "../hooks/useEntityCrud";


export default function Home() {

    const { readData: readDataCoins } = useEntityCrud('coins');
    const [options, setOptions] = useState<Option[] | null>();

    const [selectedValue, setSelectedValue] = useState<Option[] | null>();
    const handleChange = (selected: Option[]) => {
        setSelectedValue(selected);
    };

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        readDataCoins().then((res: any) => {
            if (res.status === 200) {
                let allItems: any[] = [];

                res.data.slice(0, 200).sort((a: any, b: any) => a.name > b.name ? 1 : -1)
                    .map((item: any) => {
                        allItems?.push({
                            label: item.name,
                            value: item.id
                        });
                    })

                setOptions(allItems)
            }

        });
    }

    return (
        <div className="App">
            <h1> select-box </h1>
            <MultiSelect
                options={options || []}
                onChange={handleChange}
                value={selectedValue}
                isSelectAll={true}
                menuPlacement={"bottom"}
            />
        </div>
    );

}

