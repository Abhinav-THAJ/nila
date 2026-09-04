import Link from "next/link";
import { getProduct } from "@/lib/woocommerce";
import AddToCartButton from "@/components/shop/AddToCartButton";
import { ArrowLeft, CheckCircle2, ChevronRight, Share2 } from "lucide-react";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params;
  const product = await getProduct(resolvedParams.id);

  if (!product || product.data?.status === 404) {
    notFound();
  }

  const name = product.name;
  const malayalam = product.short_description?.replace(/(<([^>]+)>)/gi, "") || "";
  const description = product.description?.replace(/(<([^>]+)>)/gi, "") || "";
  const category = product.categories?.[0]?.name || "Uncategorized";
  const sizes = product.attributes?.find((a: any) => a.name === "Size")?.options?.join(" / ") || "Standard";
  const price = Number(product.price) || 0;
  const image = product.images?.[0]?.src || "";

  // The mapped product object expected by AddToCartButton
  const cartProduct = {
    id: product.id,
    name,
    price,
    image,
    sizes,
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#faf8f5]">
      <div className="container mx-auto px-4 md:px-6 py-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-slate-500 mb-8 font-medium">
          <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href="/shop" className="hover:text-orange-500 transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link href={`/shop?category=${encodeURIComponent(category)}`} className="hover:text-orange-500 transition-colors">{category}</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-slate-900 line-clamp-1">{name}</span>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Image Gallery */}
            <div className="w-full aspect-square bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl relative overflow-hidden flex items-center justify-center border border-orange-100">
              {image ? (
                <img src={image} alt={name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-md text-orange-500 font-black text-6xl uppercase">
                  {name.charAt(0)}
                </div>
              )}
              
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold text-slate-700 uppercase tracking-wider shadow-sm">
                {category}
              </div>
              <button className="absolute top-6 right-6 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-500 hover:text-orange-500 hover:bg-white transition-all shadow-sm">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 leading-tight">
                {name}
              </h1>
              
              {malayalam && (
                <p className="text-orange-500 font-bold text-xl mb-6">
                  {malayalam}
                </p>
              )}
              
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4" />
                  In Stock
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  SKU: {product.sku || product.id}
                </div>
              </div>
              
              <div className="flex items-end gap-3 mb-8">
                <span className="text-5xl font-black text-slate-900">₹{price}</span>
                <span className="text-slate-500 font-medium mb-1 tracking-wide">/ {sizes}</span>
              </div>
              
              <div className="w-full h-[1px] bg-slate-100 mb-8"></div>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Product Description</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {description || "No description provided for this product. Made with 100% natural and authentic ingredients sourced from local farms."}
                </p>
              </div>

              {/* Add To Cart Section */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <div className="flex-1">
                   <div className="transform scale-110 origin-left">
                     <AddToCartButton product={cartProduct} />
                   </div>
                </div>
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-100">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-orange-500 font-bold">100%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Natural</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-orange-500 font-bold">0%</span>
                  </div>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Preservatives</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto bg-orange-50 rounded-full flex items-center justify-center mb-2">
                    <span className="text-orange-500 font-bold text-xl">₹</span>
                  </div>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Secure Pay</span>
                </div>
              </div>
              
            </div>
            
          </div>
        </div>
        
        {/* Back Link */}
        <div className="mt-8">
          <Link href="/shop" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 font-semibold transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Catalog
          </Link>
        </div>
      </div>
    </div>
  );
}
