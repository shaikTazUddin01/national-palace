'use client'
import { sortProduct } from "@/redux/features/product/product.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook/hooks";
import { Form } from "antd";
import { useEffect } from "react";

const SortByPrice = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  //get reset value
  const resetFilter = useAppSelector((state) => state.resetFilter.reset);

  const handleSortByPrice = (values: any) => {
    dispatch(sortProduct({ sort: values?.sort }));
  };

  useEffect(() => {
    if (resetFilter === "reset") {
      form.resetFields();
    }
  }, [form, resetFilter]);

  return (
    <Form form={form} onValuesChange={handleSortByPrice}>
      <label className="text-sm">Sort By : {"  "}</label>
      <Form.Item name="sort" noStyle>
        <select
          className="select bg-slate-200 select-sm w-full md:w-[100px] max-w-xs"
        >
          <option value="">Default</option>
          <option value="asc">Price(low to High)</option>
          <option value="dsc">Price(High to Low)</option>
        </select>
      </Form.Item>
    </Form>
  );
};

export default SortByPrice;