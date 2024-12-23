"use client";

import { Info } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import Stake from "./stake";
import { useSidebar } from "./ui/sidebar";
import {
  Tabs as ShadCNTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";
import Unstake from "./unstake";
import WithdrawLog from "./withdraw-log";
import { Icons } from "./Icons";

interface TabsProps {
  avgWaitTime: string;
}

const Tabs: React.FC<TabsProps> = ({ avgWaitTime }) => {
  const [tabs, setTabs] = React.useState("stake");
  const { open } = useSidebar();

  function getMessage() {
    if (tabs === "unstake") {
      return (
        <p>
          Unstake requests go into a Withdrawal Queue and are processed when
          STRK is available. While instant unstaking isn{"'"}t possible due to
          staking design, the average wait time is about 2 days now but can take
          longer.{" "}
          <Link
            href="https://docs.starknet.io/staking/overview/#economic_parameters"
            target="_blank"
            className="underline"
          >
            Learn more.
          </Link>
        </p>
      );
    } else if (tabs === "stake") {
      return (
        <p>
          Staking rewards are automatically claimed and compounded, gradually
          increasing the value of your xSTRK over time.
        </p>
      );
    }
  }

  return (
    <>
      <div
        className={cn("w-full max-w-xl", {
          "lg:-ml-32": open,
        })}
      >
        <div className="items-center gap-3 md:flex">
          <div className="flex items-center gap-2">
            <Icons.strkLogo className="size-8" />
            <h1 className="text-2xl font-bold text-black">Stake STRK</h1>
          </div>
          <Link
            href="https://endur.fi/audit"
            target="_blank"
            className="mt-2 flex items-center gap-1 rounded-full border border-[#17876D33] bg-[#17876D1A] px-3 py-1 transition-opacity hover:opacity-80 md:mt-0"
          >
            <Icons.shield className="size-4 text-[#17876D]" />
            <span className="text-sm text-[#17876D]">Secure and audited</span>
          </Link>
        </div>

        <p className="mt-2 text-[#8D9C9C]">
          Convert your STRK into xSTRK to earn staking rewards and participate
          in DeFi opportunities across the Starknet ecosystem.
        </p>
      </div>
      <div
        className={cn(
          "mt-6 min-h-[31.5rem] w-full max-w-xl rounded-xl bg-white shadow-xl lg:h-[37rem] xl:mt-6",
          {
            "lg:-ml-32": open,
          },
        )}
      >
        <ShadCNTabs
          onValueChange={(value) => setTabs(value)}
          value={tabs}
          defaultValue="stake"
          className="col-span-2 h-full w-full lg:mt-0"
        >
          <TabsList className="flex w-full items-center justify-start rounded-none border-b bg-transparent px-3 pb-5 pt-5 lg:pt-8">
            <TabsTrigger
              value="stake"
              className="group relative rounded-none border-none bg-transparent pl-0 text-sm font-medium text-[#8D9C9C] focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-t-0 data-[state=active]:shadow-none lg:pl-3 lg:text-base"
            >
              Stake
              <div className="absolute -bottom-[7.5px] left-0 hidden h-[2px] w-10 rounded-full bg-black group-data-[state=active]:flex lg:-bottom-[5.5px] lg:left-3" />
            </TabsTrigger>
            <TabsTrigger
              value="unstake"
              className="group relative rounded-none border-none bg-transparent text-sm font-medium text-[#8D9C9C] focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-t-0 data-[state=active]:shadow-none lg:text-base"
            >
              Unstake
              <div className="absolute -bottom-[7.5px] left-3 hidden h-[2px] w-[3.3rem] rounded-full bg-black group-data-[state=active]:flex lg:-bottom-[5.5px] lg:left-3.5" />
            </TabsTrigger>
            <TabsTrigger
              value="withdraw"
              className="group relative rounded-none border-none bg-transparent text-sm font-medium text-[#8D9C9C] focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=active]:border-t-0 data-[state=active]:shadow-none lg:text-base"
            >
              Withdraw log
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger className="ml-1" tabIndex={-1}>
                    <Info className="size-3 text-[#3F6870] lg:text-[#8D9C9C]" />
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="max-w-[13rem] rounded-md border border-[#03624C] bg-white text-[#03624C]"
                  >
                    Learn more about withdraw logs{" "}
                    <Link
                      target="_blank"
                      href="https://docs.endur.fi/docs/concepts/withdraw-log"
                      className="text-blue-600 underline"
                    >
                      here
                    </Link>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <div className="absolute -bottom-[7.5px] left-3 hidden h-[2px] w-[5rem] rounded-full bg-black group-data-[state=active]:flex lg:-bottom-[5.5px] lg:left-[16px]" />
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="stake"
            className="h-full pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 lg:pb-0"
          >
            <Stake />
          </TabsContent>

          <TabsContent
            value="unstake"
            className="h-full pb-3 focus-visible:ring-0 focus-visible:ring-offset-0 lg:pb-0"
          >
            <Unstake />
          </TabsContent>

          <TabsContent
            value="withdraw"
            className="h-full focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <WithdrawLog />
          </TabsContent>
        </ShadCNTabs>
      </div>

      {(tabs === "unstake" || tabs === "stake") && (
        <div
          className={cn(
            "mt-5 flex max-w-xl items-center rounded-md bg-[#FFC4664D] py-3 pl-4 pr-3 text-xs text-[#D69733] lg:text-sm",
            {
              "lg:-ml-32": open,
              "bg-[#C0D5CE69] text-[#134c3d9e]": tabs === "stake",
            },
          )}
        >
          <span className="mr-3 flex size-4 shrink-0 items-center justify-center rounded-full text-xl lg:size-6">
            {tabs === "unstake" ? "⚠️" : <Info />}
          </span>
          {getMessage()}
        </div>
      )}

      <p
        className={cn(
          "mt-4 flex items-center text-xs text-[#707D7D] lg:mb-3 lg:text-sm",
          {
            "lg:-ml-32": open,
          },
        )}
      >
        Made with 💚 by{" "}
        <Link
          href="https://strkfarm.xyz"
          target="_blank"
          className="mx-1 cursor-pointer font-semibold hover:underline"
        >
          STRKFarm
        </Link>{" "}
        and{" "}
        <Link
          href="https://karnot.xyz"
          target="_blank"
          className="mx-1 cursor-pointer font-semibold hover:underline"
        >
          Karnot
        </Link>
      </p>
    </>
  );
};

export default Tabs;
