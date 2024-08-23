"use client";
import { useState, useEffect, ChangeEvent } from "react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";


interface SearchItem {
	id: number;
	name: string;
}

export function SearchBar <T extends SearchItem>({ searchItems }: { searchItems: T[] }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<T[]>([]);
  const [isFocused, setIsFocused] = useState<Boolean>(false);

  const filter = (searchItems: T[]) => {
    // TODO: Implement idea. Instead of filter try a groupBy function
    const results = searchItems.filter((item) => {
      return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setResults(results);
  };

  //TODO: add debouncing
  useEffect(() => {
    filter(searchItems);
  }, [searchTerm]);

  return (
    <Command>
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(e.target.value);
        }}
	onFocus={() => { 
		setIsFocused(true);
	}}
	onBlur={() => {
		setIsFocused(false);
	}}
      />
      <CommandList className={`${!isFocused ? 'max-h-0' : 'max-h-full'} animate-accordion-down` } >
        <CommandGroup>
          {results.map((item) => (
            <CommandItem key={item.id}>
              <span>{item.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};
