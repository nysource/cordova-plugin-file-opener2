// Definitions by: Microsoft Open Technologies Inc <http://msopentech.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
//
// Copyright (c) Microsoft Open Technologies, Inc.
// Licensed under the MIT license.

interface FileOpener2 {
    open(
        fileName: string,
        contentType: string,
        callbackContext?: {
            error: (e: {
                message: string,
                status: number
            }) => void,
            success: () => void
        }
    ): void,
    showOpenWithDialog(
        fileName: string,
        contentType: string,
        callbackContext?: {
            error: (e: {
                message: string,
                status: number
            }) => void,
            success: () => void,
            position: number[]
        }
    ): void,
    uninstall(
        packageId: string,
        callbackContext?: {
            error: (e: {
                message: string,
                status: number
            }) => void,
            success: () => void
        }
    ): void,
    appIsInstalled(
        packageId: string,
        callbackContext?: {
            success: () => void
        }
    ): void
}
interface CordovaPlugins {
    fileOpener2: FileOpener2
}