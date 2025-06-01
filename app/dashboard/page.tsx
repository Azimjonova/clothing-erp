import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, Users, DollarSign, Package, ArrowUpRight, ArrowDownRight, Plus, Pencil } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="p-4 space-y-4 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Boshqaruv paneli</h1>
          <p className="text-muted-foreground">Kiyim-kechak do&apos;koni WMS tizimi</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Bugun
          </Button>
          <Button variant="outline" size="sm">
            Hafta
          </Button>
          <Button variant="outline" size="sm">
            Oy
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="stats-card shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Jami mahsulotlar</CardTitle>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <ShoppingBag className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <div className="flex items-center mt-1">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +5
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">so&apos;nggi 30 kunda</span>
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Jami mijozlar</CardTitle>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Users className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <div className="flex items-center mt-1">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +12
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">so&apos;nggi 30 kunda</span>
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Jami savdo</CardTitle>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <DollarSign className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,500,000 so&apos;m</div>
            <div className="flex items-center mt-1">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900 dark:text-green-300">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +18%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">o&apos;tgan oyga nisbatan</span>
            </div>
          </CardContent>
        </Card>
        <Card className="stats-card shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Buyurtmalar</CardTitle>
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Package className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">56</div>
            <div className="flex items-center mt-1">
              <Badge className="bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900 dark:text-red-300">
                <ArrowDownRight className="mr-1 h-3 w-3" />
                -3%
              </Badge>
              <span className="text-xs text-muted-foreground ml-2">o&apos;tgan haftaga nisbatan</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">Savdo nuqtalari</CardTitle>
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Nuqta qo&apos;shish
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              <Card className="card-orange border-none shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-orange-100 dark:bg-orange-800 flex items-center justify-center">
                        <ShoppingBag className="h-5 w-5 text-orange-600 dark:text-orange-300" />
                      </div>
                      <div>
                        <h3 className="font-medium">Savdo nuqtasi №1</h3>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Yopilgan:</span>
                      <span>12/05/2024</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Balans:</span>
                      <span className="font-medium">2,243,570 so&apos;m</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-purple border-none shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-purple-100 dark:bg-purple-800 flex items-center justify-center">
                        <ShoppingBag className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                      </div>
                      <div>
                        <h3 className="font-medium">Savdo nuqtasi №2</h3>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Yopilgan:</span>
                      <span>12/05/2024</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Balans:</span>
                      <span className="font-medium">2,243,570 so&apos;m</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-blue border-none shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-blue-100 dark:bg-blue-800 flex items-center justify-center">
                        <ShoppingBag className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                      </div>
                      <div>
                        <h3 className="font-medium">Savdo nuqtasi №3</h3>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Yopilgan:</span>
                      <span>12/05/2024</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Balans:</span>
                      <span className="font-medium">2,243,570 so&apos;m</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gray border-none shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-10 w-10 rounded-md bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        <ShoppingBag className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                      </div>
                      <div>
                        <h3 className="font-medium">Savdo nuqtasi №4</h3>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Yopilgan:</span>
                      <span>12/05/2024</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Balans:</span>
                      <span className="font-medium">2,243,570 so&apos;m</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">Oxirgi buyurtmalar</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {[
                { id: 1001, customer: "Alisher Karimov", total: 470000, status: "completed" },
                { id: 1002, customer: "Dilnoza Rahimova", total: 350000, status: "processing" },
                { id: 1003, customer: "Bobur Saidov", total: 630000, status: "shipped" },
                { id: 1004, customer: "Madina Umarova", total: 180000, status: "cancelled" },
              ].map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">#{order.id}</div>
                    <div className="text-xs text-muted-foreground">{order.customer}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{order.total.toLocaleString()} so&apos;m</div>
                    <Badge
                      className={
                        order.status === "completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : order.status === "processing"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                            : order.status === "shipped"
                              ? "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                      }
                    >
                      {order.status === "completed"
                        ? "Yakunlangan"
                        : order.status === "processing"
                          ? "Jarayonda"
                          : order.status === "shipped"
                            ? "Yuborilgan"
                            : "Bekor qilingan"}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">Eng ko&apos;p sotilgan mahsulotlar</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-md overflow-hidden mr-3">
                  <img
                    src="/placeholder.svg?height=40&width=40&text=👔"
                    alt="Klasik ko'ylak"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Klasik ko&apos;ylak</div>
                  <div className="text-xs text-muted-foreground">120 dona sotilgan</div>
                </div>
                <div className="text-sm font-medium">1,200,000 so&apos;m</div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-md overflow-hidden mr-3">
                  <img
                    src="/placeholder.svg?height=40&width=40&text=👟"
                    alt="Sport krasovka"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Sport krasovka</div>
                  <div className="text-xs text-muted-foreground">85 dona sotilgan</div>
                </div>
                <div className="text-sm font-medium">2,550,000 so&apos;m</div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-md overflow-hidden mr-3">
                  <img
                    src="/placeholder.svg?height=40&width=40&text=👖"
                    alt="Jinsi shim"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Jinsi shim</div>
                  <div className="text-xs text-muted-foreground">78 dona sotilgan</div>
                </div>
                <div className="text-sm font-medium">1,950,000 so&apos;m</div>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-md overflow-hidden mr-3">
                  <img
                    src="/placeholder.svg?height=40&width=40&text=🧥"
                    alt="Qishki kurtka"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Qishki kurtka</div>
                  <div className="text-xs text-muted-foreground">45 dona sotilgan</div>
                </div>
                <div className="text-sm font-medium">3,600,000 so&apos;m</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">To&apos;lov usullari</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Karta orqali</p>
                  </div>
                </div>
                <div className="text-sm font-medium">65%</div>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary" style={{ width: "65%" }}></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Naqd pul</p>
                  </div>
                </div>
                <div className="text-sm font-medium">35%</div>
              </div>
              <div className="h-2 w-full rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary" style={{ width: "35%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base">Mijozlar geografiyasi</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {[
                { name: "Toshkent", percent: 45 },
                { name: "Samarqand", percent: 20 },
                { name: "Andijon", percent: 15 },
                { name: "Farg'ona", percent: 10 },
                { name: "Boshqa", percent: 10 },
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="font-medium">{item.percent}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${item.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
