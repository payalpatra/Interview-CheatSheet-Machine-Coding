import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import Accodion from "./components/1_CoreMachineCoding/1_Accodian";
import Pagination from "./components/1_CoreMachineCoding/2_Pagination";
import InfiniteScroll from "./components/1_CoreMachineCoding/3_InfiniteScroll";
import VirtualizedList from "./components/1_CoreMachineCoding/4_Virtualization";
import Tabs from "./components/1_CoreMachineCoding/5_Tabs";
import Form from "./components/1_CoreMachineCoding/6_Form";
import Modal from "./components/1_CoreMachineCoding/7_Modal";
import Dropdown from "./components/1_CoreMachineCoding/9_Dropdown";
import Carousal from "./components/1_CoreMachineCoding/8_Carousal";
import ProgressBar from "./components/1_CoreMachineCoding/10_ProgressBar";
import Checkbox from "./components/1_CoreMachineCoding/11_CheckboxTree";
import Toast from "./components/1_CoreMachineCoding/13_Toast";
import TextStreamer from "./components/1_CoreMachineCoding/14_TextStreamer";
import AutoComplete from "./components/1_CoreMachineCoding/15_AutoComplete";

import TrafficLights from "./components/2_BasicSystemLevel/1_TrafficLights";

import Todo from "./components/3_ProductLevel/1_Todo/Todo";
import NestedComments from "./components/3_ProductLevel/3_NestedComments/Comments";
import NestedFolders from "./components/3_ProductLevel/2_FolderStructure/Folders";

export default function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <BrowserRouter>
        <Routes>
          {/* Core Machine Coding Components */}
          <Route path="/" element={<Home />} />
          <Route path="/accodian" element={<Accodion />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/infiniteScroll" element={<InfiniteScroll />} />
          <Route path="/virtualization" element={<VirtualizedList />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/form" element={<Form />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/carousal" element={<Carousal />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/progressBar" element={<ProgressBar />} />

          <Route path="/checkboxTree" element={<Checkbox />} />
          <Route path="/autoComplete" element={<AutoComplete />} />
          <Route path="/toast" element={<Toast />} />
          <Route path="/textStreamer" element={<TextStreamer />} />

          {/* Basic System-Level Machine Coding */}
          <Route path="/trafficLights" element={<TrafficLights />} />

          {/* Product-Level UI Problems */}
          <Route path="/todo" element={<Todo />}>
            Todo APP
          </Route>
          <Route path="/nestedComments" element={<NestedComments />}>
            Nested Comments
          </Route>
          <Route path="/fileExplorer" element={<NestedFolders />}>
            Folder Structure
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
