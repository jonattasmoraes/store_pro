import { Menu} from "lucide-react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { ShoppingCart } from "lucide-react";

const Header = () => {
    return (
        <Card className="flex items-center justify-between p-[1.875rem]">
            <Button size="icon" variant="outline">
                <Menu />
            </Button>

            <h1 className="text-lg font-semibold">
                <span className="text-primary">FWS</span> Store
            </h1>

            <Button size="icon" variant="outline">
                <ShoppingCart />
            </Button>
        </Card>
    );
};

export default Header;