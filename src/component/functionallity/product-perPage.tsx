import { paginationProduct } from "@/redux/features/product/product.slice";
import { useAppDispatch } from "@/redux/hook/hooks";
import { Form } from "antd";

const ShowProduct = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const handleShowProduct = (value: any) => {
    dispatch(paginationProduct({ limit: Number(value) }));
  };

  return (
    <Form form={form}>
      <label className="text-sm text-gray-600 mr-2">Show : {"  "}</label>
      <select
        className="select bg-slate-100 select-sm w-full md:w-[90px] max-w-xs"
        onChange={(e) => handleShowProduct(e.target.value)}
        defaultValue="8"
      >
        <option value="8">8</option>
        <option value="12">12</option>
        <option value="16">16</option>
        <option value="20">20</option>
        <option value="24">24</option>
      </select>
    </Form>
  );
};

export default ShowProduct;