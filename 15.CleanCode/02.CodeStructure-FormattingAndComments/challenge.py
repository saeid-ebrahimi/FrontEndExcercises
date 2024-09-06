# (c) Saeid Ebrahimi / Cydemy

from os import path, makedirs
from pathlib import Path

class DiskStorage:
    def __init__(self, directory_name: str) -> None:
        self.storage_directory = directory_name

    def get_directory_path(self) -> "Path":
        return Path(self.storage_directory)

    def create_directory(self) -> None:
        directory_path = self.get_directory_path()
        if(not path.exists(directory_path)):
            makedirs(self.storage_directory)

    # Warning: Directory must exists in advancve
    def insert_file(self, file_name:str, content:str) -> None:
        file_path = self.get_directory_path()+ "/" +file_name
        file = open(file_path, "w")
        file.write(content)
        file.close()
        # Todo : Add proper error handling


log_storage = DiskStorage("logs")

log_storage.create_directory()
log_storage.insert_file("log.txt", "testing writing test")