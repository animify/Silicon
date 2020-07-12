import React from 'react';
import { Flex, Text } from '../../../src';
import lightTheme from '../../../src/theme/light';

export default function PageColors() {
    const colorMap = lightTheme.color;
    const rawColorGroups = ['white', 'black'];
    const colorGroups: Record<string, string[]> = Object.keys(colorMap).reduce((obj, name) => {
        const [color] = name.match(/([a-z]+)|([^a-z]+)/gi) as [string, string];

        const isRawColor = rawColorGroups.includes(color);
        const colorKey = isRawColor ? 'raw' : color;

        if (obj[colorKey]) {
            obj[colorKey].push(name);
        } else {
            obj[colorKey] = [name];
        }

        return obj;
    }, {});

    return (
        <section>
            {Object.entries(colorGroups).map(([group, names]) => (
                <Flex key={group} direction="column" mb="8">
                    <Flex align="center">
                        <Text size="h5" textTransform="capitalize" weight="semibold">
                            {group} Palette
                        </Text>
                        <Text color="dark50" weight="medium" ml="2">
                            {names.length} color{names.length > 1 ? 's' : ''}
                        </Text>
                    </Flex>

                    <Flex mt="2">
                        {names
                            .sort((a, b) => parseInt(b) - parseInt(a))
                            .map((name) => (
                                <Flex key={name} direction="column" maxWidth="100%">
                                    <Flex mb="1" height={85} width={85} bg={colorMap[name]} />
                                    <Text size="small" weight="bold">
                                        {name}
                                    </Text>
                                    <Text size="small" family="code" weight="medium" color="dark50">
                                        {colorMap[name]}
                                    </Text>
                                </Flex>
                            ))}
                    </Flex>
                </Flex>
            ))}
        </section>
    );
}
