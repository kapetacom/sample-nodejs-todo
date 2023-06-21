import React from "react";
import {
    FragmentFrame,
    FragmentProps,
} from "@kapeta/sdk-web-microfrontend-frame";

let BASE_PATH = "fragments/user";
if (!BASE_PATH.endsWith("/")) {
    //Make sure the path ends with a slash so that relative paths work
    BASE_PATH += "/";
}

export const UserwebFragment = (props: Omit<FragmentProps, "basePath">) => {
    return <FragmentFrame basePath={BASE_PATH} {...props}></FragmentFrame>;
};
