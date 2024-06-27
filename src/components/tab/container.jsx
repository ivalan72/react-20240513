import { Tab } from "./component";

export const RestaurantTab = ({name, setActiveTab, active}) => {
    if (!name) {
        return null;
    }

    return <Tab setActiveTab={setActiveTab} active={active}>{name}</Tab>
};
