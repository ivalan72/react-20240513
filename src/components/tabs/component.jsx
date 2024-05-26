import { Tab } from "../tab/component";

export const Tabs = ({tabs, setActiveTab, activeTab}) => {
    return (
        <div>
            {tabs.map(tab => (
                <Tab key={tab.id} tab={tab} setActiveTab={setActiveTab} active={tab === activeTab}/>
            ))}
        </div>
    );
};
