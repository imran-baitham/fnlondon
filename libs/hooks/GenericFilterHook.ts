import { UserDataProps } from "../Types";
import Industries from "./UserData.json";

interface GenericFilterProps {
  data: UserDataProps[];
}

function GenericFilterHook({ data }: GenericFilterProps) {
  const getFirstCharacter: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const getSequenceIndusty = getFirstCharacter.map((char) => {
    const industries = Industries.filter(
      (item) => item.title.charAt(0) === char
    );
    return { char, industries };
  });
  let filteredList = getSequenceIndusty.filter((industry) => {
    return industry.industries.length > 0;
  });
  return { filteredList };
}

export default GenericFilterHook;
