import { appendFileSync, readFileSync, statSync, writeFileSync  } from "fs";

function initJSON(path: string) { // Creates file with just empty brackets
        appendFileSync(path, "{}");
}

export function parseJSON(path: string) { // Reads the JSON file at the path given
        initJSONifNotExist(path);
        return JSON.parse(readFileSync(path, "utf8"));
}

function initJSONifNotExist(path: string) { // Creates a json file if it does not exist
        if (!isFile(path)) {
            initJSON(path);
        }
}

export function writeJSON(path: string, data: string) { // writes data to a file specified at the given path
        initJSONifNotExist(path);
        writeFileSync(path, JSON.stringify(data));
}

function isFile(filepath:string):boolean {
        try {
            return statSync(filepath).isFile();
        } catch (err) {
            return false;
        }
}