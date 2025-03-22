import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

type OrderFormData = {
  location: string;
  description: string;
  contactName: string;
  contactPhone: string;
};

const PowerService = () => {
  const [orderStatus, setOrderStatus] = useState<'pending' | 'processing' | 'completed'>('pending');
  const [showPayment, setShowPayment] = useState(false);

  const form = useForm<OrderFormData>();

  const onSubmit = (data: OrderFormData) => {
    console.log(data);
    setShowPayment(true);
    toast.success('订单创建成功！');
  };

  const handlePayment = () => {
    setOrderStatus('processing');
    setShowPayment(false);
    toast.success('支付成功！工作人员即将赶到！');
  };

  const handleRating = () => {
    toast.success('感谢您的评价！');
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <Tabs defaultValue="order" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="order">创建订单</TabsTrigger>
          <TabsTrigger value="status">订单状态</TabsTrigger>
          <TabsTrigger value="rating">评价服务</TabsTrigger>
        </TabsList>

        <TabsContent value="order">
          <Card>
            <CardHeader>
              <CardTitle>发电服务申请</CardTitle>
              <CardDescription>请填写以下信息申请发电服务</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>服务地点</FormLabel>
                        <FormControl>
                          <div className="flex gap-2">
                            <Input placeholder="点击获取位置" {...field} />
                            <Button type="button" variant="outline">定位</Button>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>需求描述</FormLabel>
                        <FormControl>
                          <Textarea placeholder="请详细描述您的发电需求..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>联系人</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="contactPhone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>联系电话</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full">提交订单</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="status">
          <Card>
            <CardHeader>
              <CardTitle>订单状态</CardTitle>
              <CardDescription>实时跟踪服务进度</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={
                  orderStatus === 'pending' ? 33 :
                  orderStatus === 'processing' ? 66 :
                  100
                } />
                
                <div className="grid gap-2">
                  <div className="flex justify-between items-center">
                    <span>订单创建</span>
                    <span className="text-green-500">✓</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>工程师派遣</span>
                    <span className={orderStatus !== 'pending' ? "text-green-500" : "text-gray-400"}>
                      {orderStatus !== 'pending' ? "✓" : "待处理"}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>服务完成</span>
                    <span className={orderStatus === 'completed' ? "text-green-500" : "text-gray-400"}>
                      {orderStatus === 'completed' ? "✓" : "进行中"}
                    </span>
                  </div>
                </div>

                {showPayment && (
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">支付信息</h3>
                    <div className="border p-4 rounded-lg">
                      <p className="mb-2">订单金额：¥1000.00</p>
                      <Button onClick={handlePayment} className="w-full">
                        确认支付
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rating">
          <Card>
            <CardHeader>
              <CardTitle>服务评价</CardTitle>
              <CardDescription>请对本次服务进行评价</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-center gap-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="text-2xl text-yellow-400 hover:scale-110 transition-transform"
                      onClick={() => handleRating()}
                    >
                      ⭐
                    </button>
                  ))}
                </div>
                <Textarea placeholder="请分享您的使用体验..." className="mt-4" />
                <Button onClick={handleRating} className="w-full">
                  提交评价
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PowerService; 