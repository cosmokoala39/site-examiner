import Link from "next/link";
import React from "react";

interface ArticleProps {
  image: string;
  title: string;
  slug: string;
  shortdescription: string;
  category:string;
}

function Repeat({ image, title, slug, shortdescription,category }: ArticleProps) {
  return (
    <div className="">
      <div className="row   ">

      {/* ----------------------------------------------------------------------------------1st---------------------------- */}

        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
         
          <p className="fw-bold text-muted mb-2">{title}</p>

          {/* Image */}
          <div className="mb-2">
                 <Link href={`/${category || 'business'}/${slug}`}>

            <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            />  </Link>
          </div>

          {/* Text under image */}
          <p className="text-muted small mb-0">
            {shortdescription.slice(0, 100)}...
          </p>
          <p className=" text-muted mb-2">Author</p>
        </div>

        {/* -----------horizontal-------------- */}
        <div className="col-lg-6  ">
          {/* -----------1st horiz-------------- */}
          <div className="border-bottom p-3">
            
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                 <Link href={`/${category || 'business'}/${slug}`}>

                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                /> </Link>
              </div>
            </div>
          </div>

          {/* -----------2nd horiz-------------- */}
          <div className="  p-3">
           
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                 <Link href={`/${category || 'business'}/${slug}`}>
                {" "} 
                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                /> </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="divider"></div>




        {/* -----------------------------------------------------------------------------------------2nd reverse--------------------- */}


      <div className="row   ">
        {/* -----------horizontal-------------- */}

        <div className="col-lg-6 border-end">
          {/* -----------1st-------------- */}
          <div className="border-bottom p-3">
           
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                 <Link href={`/${category || 'business'}/${slug}`}>

                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                /> </Link>
              </div>
            </div>
          </div>

          {/* -----------2nd-------------- */}
          <div className="p-3 ">
           
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                 <Link href={`/${category || 'business'}/${slug}`}>
                
                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                /> </Link>
              </div>
            </div>
          </div>
        </div>

       
        {/* ------------vertical------------ */}
       <div className="col-lg-6 border-end p-3">
          
          <p className="fw-bold text-muted mb-2">{title}</p>

          {/* Image */}
          <div className="mb-2">
                 <Link href={`/${category || 'business'}/${slug}`}>
            
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            /> </Link>
          </div>

          {/* Text under image */}
          <p className="text-muted small mb-0">
            {shortdescription.slice(0, 100)}...
          </p>
          <p className=" text-muted mb-2">Author</p>
        </div>
      </div>
      <div className="divider"></div>


      {/* -----------------------------------------------------------------------------------3rd------------------- */}

       <div className="row   ">

      {/* ----------------------1st---------------------------- */}

        {/* ------------vertical------------ */}
       <div className="col-lg-6 border-end p-3">
          {/* Top labels: Breaking + Title */}
         
          <p className="fw-bold text-muted mb-2">{title}</p>

          {/* Image */}
          <div className="mb-2">
                 <Link href={`/${category || 'business'}/${slug}`}>

            <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            /></Link>
          </div>

          {/* Text under image */}
          <p className="text-muted small mb-0">
            {shortdescription.slice(0, 100)}...
          </p>
          <p className=" text-muted mb-2">Author</p>
        </div>

        {/* -----------horizontal-------------- */}
        <div className="col-lg-6 ">
          {/* -----------1st horiz-------------- */}
          <div className="border-bottom p-3">
           
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                 <Link href={`/${category || 'business'}/${slug}`}>

                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                /> </Link>
              </div>
            </div>
          </div>

          {/* -----------2nd horiz-------------- */}
          <div className=" p-3">
            
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                 <Link href={`/${category || 'business'}/${slug}`}>

                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                /> </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="divider"></div>


        {/* -----------------------------------------------------------------------------------------4th reverse--------------------- */}


      <div className="row   ">
        {/* -----------horizontal-------------- */}

        <div className="col-lg-6  border-end">
          {/* -----------1st-------------- */}
          <div className="border-bottom p-3">
           
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                 <Link href={`/${category || 'business'}/${slug}`}>
                
                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                /> </Link>
              </div>
            </div>
          </div>

          {/* -----------2nd-------------- */}
          <div className="p-3 ">
           
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                 <Link href={`/${category || 'business'}/${slug}`}>
                
                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                /> </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          {/* Top labels: Breaking + Title */}
          
          <p className="fw-bold text-muted mb-2">{title}</p>

          {/* Image */}
          <div className="mb-2">
                 <Link href={`/${category || 'business'}/${slug}`}>
            
            <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            /> </Link>
          </div>

          {/* Text under image */}
          <p className="text-muted small mb-0">
            {shortdescription.slice(0, 100)}...
          </p>
          <p className=" text-muted mb-2">Author</p>
        </div>
      </div>
      <div className="divider"></div>



      {/* -----------------------------------------------------------------------------------5th--------------------------------- */}

       <div className="row   ">

      {/* ----------------------1st---------------------------- */}

        {/* ------------vertical------------ */}
        <div className="col-lg-6 border-end p-3">
          {/* Top labels: Breaking + Title */}
         
          <p className="fw-bold text-muted mb-2">{title}</p>

          {/* Image */}
          <div className="mb-2">
                 <Link href={`/${category || 'business'}/${slug}`}>

            <img
              src={image}
              alt={title}
              className="img-fluid w-100 rounded"
              style={{ height: "220px", objectFit: "cover" }}
            /> </Link>
          </div>

          {/* Text under image */}
          <p className="text-muted small mb-0">
            {shortdescription.slice(0, 100)}...
          </p>
          <p className=" text-muted mb-2">Author</p>
        </div>

        {/* -----------horizontal-------------- */}
        <div className="col-lg-6  ">
          {/* -----------1st horiz-------------- */}
          <div className="border-bottom p-3">
          
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                 <Link href={`/${category || 'business'}/${slug}`}>
                
                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                /> </Link>
              </div>
            </div>
          </div>

          {/* -----------2nd horiz-------------- */}
          <div className="p-3 ">
           
            <p className="fw-bold"> {title}</p>
            <div className="row">
              <div className="col-lg-8">
                <p className="text-muted">{shortdescription.slice(0, 30)}</p>
                <p className="text-muted">46 mint ago</p>
              </div>
              <div className="col-lg-4">
                {" "}
                 <Link href={`/${category || 'business'}/${slug}`}>

                <img
                  src={image}
                  alt={title}
                  className="img-fluid w-100 rounded"
                  style={{ height: "80px", objectFit: "cover" }}
                /> </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="divider"></div>

      
    </div>
  );
}

export default Repeat;
