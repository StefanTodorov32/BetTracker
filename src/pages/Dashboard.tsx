import CreateBetsModal from "@/components/CreateBetModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Dashboard: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => setShowModal(!showModal);

    return (
        <div className="flex justify-center flex-1">
            <div className="mt-8 flex flex-col">
                {/* <h1 className="text-2xl font-bold">
                    Please add a bankroll and start tracking your bets!
                </h1>
                <Button variant={"destructive"} className="mt-8">Add bankroll</Button> */}

                <Button
                    variant={"default"}
                    className="font-bold"
                    onClick={handleModal}
                >
                    Add Bet
                </Button>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
                    <div className=" rounded-lg z-10">
                        <CreateBetsModal setShowModal={setShowModal} />
                    </div>
                </div>
            )}
        </div>
    );
};
