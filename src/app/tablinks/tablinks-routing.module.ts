import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TablinksPage } from "./tablinks.page";

const routes: Routes = [
  {
    path: "tablinks",
    component: TablinksPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "transactions",
        loadChildren: () =>
          import("../transactions/transactions.module").then(
            (m) => m.TransactionsPageModule
          ),
      },
      {
        path: "card",
        loadChildren: () =>
          import("../card/card.module").then((m) => m.CardPageModule),
      },
      {
        path: "more",
        loadChildren: () =>
          import("../more/more.module").then((m) => m.MorePageModule),
      },
      {
        path: "",
        redirectTo: "/tablinks/card",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tablinks/card",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
