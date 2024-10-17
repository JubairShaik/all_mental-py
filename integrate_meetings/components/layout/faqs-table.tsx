import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export const FAQsTable = () => {
    return(

                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Capital/Saratoga
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Albany
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Eastern Adirondacks
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Plattsburgh
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Western Adirondacks
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Watertown
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Central New York
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Syracuse
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Finger Lakes
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Rochester
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Western New York
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Buffalo
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Hudson Valley
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Kingston
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Westchester/Rockland
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        White Plains
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        Long Island
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Hauppauge
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">
                                        New York City
                                    </TableCell>
                                    <TableCell className="font-normal">
                                        Brooklyn, Manhattan, Bronx, Queens, and
                                        Staten Island
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
    )


}