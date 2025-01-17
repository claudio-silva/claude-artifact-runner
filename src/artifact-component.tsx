import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";

// Constants
const PRODUCT_OPTIONS = [
  { bvc: "3380", cropName: "CUCUMBER", variety: "Tamim Plus Coated", packSize: "10", pricePerKG: "32,305" },
  { bvc: "4619", cropName: "WAX GOURD", variety: "Akhi Coated", packSize: "5", pricePerKG: "15,470" },
  { bvc: "12350", cropName: "BEANYARDLONG", variety: "Green Land Coated", packSize: "500", pricePerKG: "1,183" },
  { bvc: "26120", cropName: "OKRA", variety: "Sundor Coated BD", packSize: "50", pricePerKG: "3,367" },
];

// Utility Functions
const calculateQtyInKG = (packSize: string, packQty: string): string => {
  const size = parseFloat(packSize.replace(/[^0-9.]/g, ""));
  const qty = parseFloat(packQty);
  return (size * qty).toFixed(2);
};

const calculateTotal = (pricePerKG: string, qtyInKG: string): string => {
  const price = parseFloat(pricePerKG.replace(/,/g, ""));
  const qty = parseFloat(qtyInKG);
  return (price * qty).toLocaleString();
};

const OrderPopup = ({
  onAddItem,
  isOpen,
  onClose,
}: {
  onAddItem: (product: any, packQty: string) => void;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [packQty, setPackQty] = useState<string>("1");
  const [customQty, setCustomQty] = useState<string>("");
  const [isCustomQty, setIsCustomQty] = useState(false);

  // Common pack quantities
  const commonQuantities = [1, 5, 10, 20, 50, 100];

  const handleAddItem = () => {
    if (selectedProduct) {
      const finalQty = isCustomQty ? customQty : packQty;
      onAddItem(selectedProduct, finalQty);
      setSelectedProduct(null);
      setPackQty("1");
      setCustomQty("");
      setIsCustomQty(false);
      onClose();
    }
  };

  const calculatedQtyInKG = selectedProduct && (isCustomQty ? customQty : packQty)
    ? calculateQtyInKG(selectedProduct.packSize, isCustomQty ? customQty : packQty)
    : "0";

  const calculatedTotal = selectedProduct && (isCustomQty ? customQty : packQty)
    ? calculateTotal(selectedProduct.pricePerKG, calculatedQtyInKG)
    : "0";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Order Item</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {/* Brand Selector */}
          <div>
            <label className="block text-sm font-medium mb-1">Brand</label>
            <Select 
              onValueChange={(value) => {
                setSelectedProduct(PRODUCT_OPTIONS.find((p) => p.bvc === value) || null);
                setPackQty("1");
                setCustomQty("");
                setIsCustomQty(false);
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a Brand" />
              </SelectTrigger>
              <SelectContent>
                {PRODUCT_OPTIONS.map((product) => (
                  <SelectItem key={product.bvc} value={product.bvc}>
                    {product.cropName} ({product.variety})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Pack Quantity Selector */}
          {selectedProduct && (
            <div>
              <label className="block text-sm font-medium mb-1">Pack Quantity</label>
              <div className="space-y-3">
                {/* Common quantities grid */}
                <div className="grid grid-cols-3 gap-2">
                  {commonQuantities.map((qty) => (
                    <Button
                      key={qty}
                      type="button"
                      variant={!isCustomQty && packQty === qty.toString() ? "default" : "outline"}
                      className="w-full"
                      onClick={() => {
                        setPackQty(qty.toString());
                        setIsCustomQty(false);
                      }}
                    >
                      {qty}
                    </Button>
                  ))}
                </div>

                {/* Custom quantity input */}
                <div className="flex items-center space-x-2">
                  <Input
                    type="number"
                    placeholder="Custom quantity"
                    value={customQty}
                    onChange={(e) => {
                      setCustomQty(e.target.value);
                      setIsCustomQty(true);
                    }}
                    className="flex-1"
                    min="1"
                  />
                  {isCustomQty && (
                    <Button
                      variant="outline"
                      onClick={() => {
                        setIsCustomQty(false);
                        setCustomQty("");
                        setPackQty("1");
                      }}
                    >
                      Reset
                    </Button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Dynamic Calculations */}
          {selectedProduct && (
            <div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>BVC</TableCell>
                    <TableCell>{selectedProduct.bvc}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Price per KG</TableCell>
                    <TableCell>{selectedProduct.pricePerKG}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Pack Size</TableCell>
                    <TableCell>{selectedProduct.packSize}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Selected Quantity</TableCell>
                    <TableCell>{isCustomQty ? customQty : packQty}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Quantity (KG)</TableCell>
                    <TableCell>{calculatedQtyInKG}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total Price</TableCell>
                    <TableCell>{calculatedTotal}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="default"
              onClick={handleAddItem}
              disabled={!selectedProduct || (!packQty && !customQty) || (isCustomQty && !customQty)}
            >
              Add Item
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const OrderManagementApp = () => {
  const [orderItems, setOrderItems] = useState<any[]>([]);
  const [popupOpen, setPopupOpen] = useState(false);

  const { toast } = useToast();

  const handleAddItem = (product: any, packQty: string) => {
    const qtyInKG = calculateQtyInKG(product.packSize, packQty);
    const total = calculateTotal(product.pricePerKG, qtyInKG);

    const newItem = {
      ...product,
      packQty,
      qtyInKG,
      total,
      status: "pending",
    };

    setOrderItems([...orderItems, newItem]);
    toast({
      title: "Item Added",
      description: `${product.cropName} (${product.variety}) added successfully.`,
    });
  };

  const OrderPopup = ({
    onAddItem,
    isOpen,
    onClose,
  }: {
    onAddItem: (product: any, packQty: string) => void;
    isOpen: boolean;
    onClose: () => void;
  }) => {
    const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
    const [packQty, setPackQty] = useState<string>("1");
    const [customQty, setCustomQty] = useState<string>("");
    const [isCustomQty, setIsCustomQty] = useState(false);
  
    // Common pack quantities
    const commonQuantities = [1, 5, 10, 20, 50, 100];
  
    const handleAddItem = () => {
      if (selectedProduct) {
        const finalQty = isCustomQty ? customQty : packQty;
        onAddItem(selectedProduct, finalQty);
        setSelectedProduct(null);
        setPackQty("1");
        setCustomQty("");
        setIsCustomQty(false);
        onClose();
      }
    };
  
    const calculatedQtyInKG = selectedProduct && (isCustomQty ? customQty : packQty)
      ? calculateQtyInKG(selectedProduct.packSize, isCustomQty ? customQty : packQty)
      : "0";
  
    const calculatedTotal = selectedProduct && (isCustomQty ? customQty : packQty)
      ? calculateTotal(selectedProduct.pricePerKG, calculatedQtyInKG)
      : "0";
  
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Order Item</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Brand Selector */}
            <div>
              <label className="block text-sm font-medium mb-1">Brand</label>
              <Select 
                onValueChange={(value) => {
                  setSelectedProduct(PRODUCT_OPTIONS.find((p) => p.bvc === value) || null);
                  setPackQty("1");
                  setCustomQty("");
                  setIsCustomQty(false);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a Brand" />
                </SelectTrigger>
                <SelectContent>
                  {PRODUCT_OPTIONS.map((product) => (
                    <SelectItem key={product.bvc} value={product.bvc}>
                      {product.cropName} ({product.variety})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
  
            {/* Pack Quantity Selector */}
            {selectedProduct && (
              <div>
                <label className="block text-sm font-medium mb-1">Pack Quantity</label>
                <div className="space-y-3">
                  {/* Common quantities grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {commonQuantities.map((qty) => (
                      <Button
                        key={qty}
                        type="button"
                        variant={!isCustomQty && packQty === qty.toString() ? "default" : "outline"}
                        className="w-full"
                        onClick={() => {
                          setPackQty(qty.toString());
                          setIsCustomQty(false);
                        }}
                      >
                        {qty}
                      </Button>
                    ))}
                  </div>
  
                  {/* Custom quantity input */}
                  <div className="flex items-center space-x-2">
                    <Input
                      type="number"
                      placeholder="Custom quantity"
                      value={customQty}
                      onChange={(e) => {
                        setCustomQty(e.target.value);
                        setIsCustomQty(true);
                      }}
                      className="flex-1"
                      min="1"
                    />
                    {isCustomQty && (
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsCustomQty(false);
                          setCustomQty("");
                          setPackQty("1");
                        }}
                      >
                        Reset
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
  
            {/* Dynamic Calculations */}
            {selectedProduct && (
              <div>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>BVC</TableCell>
                      <TableCell>{selectedProduct.bvc}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Price per KG</TableCell>
                      <TableCell>{selectedProduct.pricePerKG}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Pack Size</TableCell>
                      <TableCell>{selectedProduct.packSize}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Selected Quantity</TableCell>
                      <TableCell>{isCustomQty ? customQty : packQty}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Total Quantity (KG)</TableCell>
                      <TableCell>{calculatedQtyInKG}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Total Price</TableCell>
                      <TableCell>{calculatedTotal}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            )}
  
            {/* Action Buttons */}
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="default"
                onClick={handleAddItem}
                disabled={!selectedProduct || (!packQty && !customQty) || (isCustomQty && !customQty)}
              >
                Add Item
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Order Management</h1>
        <Button variant="primary" onClick={() => setPopupOpen(true)}>
          Add Order Item
        </Button>
      </div>

      {/* Order Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>BVC</TableCell>
            <TableCell>Crop Name</TableCell>
            <TableCell>Variety</TableCell>
            <TableCell>Pack Size</TableCell>
            <TableCell>Pack Qty</TableCell>
            <TableCell>Qty in KG</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderItems.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{item.bvc}</TableCell>
              <TableCell>{item.cropName}</TableCell>
              <TableCell>{item.variety}</TableCell>
              <TableCell>{item.packSize}</TableCell>
              <TableCell>{item.packQty}</TableCell>
              <TableCell>{item.qtyInKG}</TableCell>
              <TableCell>{item.total}</TableCell>
              <TableCell>{item.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Popup Dialog */}
      <OrderPopup
        isOpen={popupOpen}
        onAddItem={handleAddItem}
        onClose={() => setPopupOpen(false)}
      />
    </div>
  );
};

export default OrderManagementApp;
