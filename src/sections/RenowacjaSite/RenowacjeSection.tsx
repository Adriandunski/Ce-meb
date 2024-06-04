import RenowacjaCard from "@/sections/RenowacjaSite/RenowacjaCard";
import {renowacjeList} from "@/utils/product/renowacje";

export default async function RenowacjeSection() {

    const renowacje = renowacjeList;

    return (
        <div className={'flex gap-20 flex-col mt-20'}>
            {renowacje.map((value, index) => <RenowacjaCard renowacja={value} key={index}/>)}
        </div>
    );
}