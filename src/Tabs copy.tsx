import React, { useEffect, useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    const tabList = event.target.parentElement;
    const numberOfTabs = tabList.childElementCount;

    if (event.code === 'ArrowRight' || event.code === 'ArrowDown') {
      const nextIndex = (activeTab + 1) % numberOfTabs;
      tabList.children[nextIndex].focus();
      setActiveTab(nextIndex);
    }
    if (event.code === 'ArrowLeft' || event.code === 'ArrowUp') {
      const previousIndex = (activeTab - 1 + numberOfTabs) % numberOfTabs;
      tabList.children[previousIndex].focus();
      setActiveTab(previousIndex);
    }
  };

  return (
    <>
      <h1 id="tab-title">Tab Component</h1>

      <div role="tablist" aria-labelledby="tab-title">
        <button
          type="button"
          role="tab"
          tabIndex={activeTab === 0 ? 0 : -1}
          aria-selected={activeTab === 0 ? 'true' : 'false'}
          onClick={() => handleTabClick(0)}
          onKeyDown={(e) => handleKeyDown(e)}
          id="tab1"
          aria-controls="tabPanel1"
        >
          Tab 1
        </button>
        <button
          type="button"
          role="tab"
          tabIndex={activeTab === 1 ? 0 : -1}
          aria-selected={activeTab === 1 ? 'true' : 'false'}
          onClick={() => handleTabClick(1)}
          onKeyDown={(e) => handleKeyDown(e)}
          id="tab2"
          aria-controls="tabPanel2"
        >
          Tab 2
        </button>
        <button
          type="button"
          role="tab"
          tabIndex={activeTab === 2 ? 0 : -1}
          aria-selected={activeTab === 2 ? 'true' : 'false'}
          onClick={() => handleTabClick(2)}
          onKeyDown={(e) => handleKeyDown(e)}
          id="tab3"
          aria-controls="tabPanel3"
        >
          Tab 3
        </button>
        <button
          type="button"
          role="tab"
          tabIndex={activeTab === 3 ? 0 : -1}
          aria-selected={activeTab === 3 ? 'true' : 'false'}
          onClick={() => handleTabClick(3)}
          onKeyDown={(e) => handleKeyDown(e)}
          id="tab4"
          aria-controls="tabPanel4"
        >
          Tab 4
        </button>
      </div>

      {activeTab === 0 ? (
        <div role="tabpanel" aria-labelledby="tab1" id="tabPanel1" tabIndex={0}>
          Content of tab 1
        </div>
      ) : null}
      {activeTab === 1 ? (
        <div role="tabpanel" aria-labelledby="tab2" id="tabPanel2" tabIndex={0}>
          Content of tab 2
        </div>
      ) : null}
      {activeTab === 2 ? (
        <div role="tabpanel" aria-labelledby="tab3" id="tabPanel3" tabIndex={0}>
          Content of tab 3
        </div>
      ) : null}
      {activeTab === 3 ? (
        <div role="tabpanel" aria-labelledby="tab4" id="tabPanel4" tabIndex={0}>
          Content of tab 4
        </div>
      ) : null}
    </>
  );
}

export default Tabs;
