export const Tab = ({tab, setActiveTab, active}) => {
    return (
        <button onClick={() => setActiveTab(tab)} disabled={active}>
            {tab.name}
        </button>
    );
};
