'use client'

import { Droplets, TreePalm, Trees } from "lucide-react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const RelaxButton = () => {

    const [playBeachSounds, setPlayBeachsounds] = useState<Checked>(false);
    const [playRainSounds, setPlayRainSounds] = useState<Checked>(false);
    const [playForestSounds, setPlayForestSounds] = useState<Checked>(false);

    return (
        <ToggleGroup size="sm" type="single">
            <ToggleGroupItem
                value="beach sounds"
                aria-label="Toggle beach sounds"
            >
                <TreePalm className="mr-2 h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
                value="rain sounds"
                aria-label="Toggle rain sounds"
            >
                <Droplets className="mr-2 h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
                value="forest sounds"
                aria-label="Toggle forest sounds"
            >
                <Trees className="mr-2 h-4 w-4" />
            </ToggleGroupItem>
        </ToggleGroup>
    );
};