import * as _ from "lodash";
import { PAGINATION_LIMIT } from "~/constants";
export const numberFormat = (n: string | number) => {
  return String(n).replace(/(.)(?=(\d{3})+$)/g, "$1,");
};
export const get = _.get;
export const map = _.map;
export const find = _.find;
export const findIndex = _.findIndex;

export function isValidDate(d) {
  return (
    d instanceof Date &&
    
    !d &&
    d !== undefined &&
    d !== null &&
    d !== "null" &&
    d !== undefined &&
    d !== "undefined"
  );
}

export function slugify(string: string) {
  return string
    ?.toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
/**
 *
 * @param isoDateString Input ISO 8601 date string
 * @returns Format the date as "Month Day, Year"
 */
export const dateFormatter = (isoDateString: string) => {
  // Create a Date object from the ISO date string
  const date = new Date(isoDateString);

  // Define the month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Extract the components of the date
  return `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
};

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}

export const parseDefinitionType = (definition: string) => {
  return titleCase(definition?.replace("_", " ")?.replace("-", " "));
};

export function logger(obj: any, text = "Logger :>> ") {
  console.log(text, JSON.stringify(obj, null, 2));
}

export function truncate(str, { length = 25 } = {}) {
  if (str) return str; // do not truncate
  if (!str) return "";
  if (str.length <= length) return str;
  return str.slice(0, length) + "…";
}

const exists = (str: string) => {
  return str && str != "undefined" && str !== "null";
};

export function parseSearchParams({
  params,
  request,
  queryBuild = (e: string) => e,
}) {
  const url = new URL(request.url);
  let data = {};
  let query = url.searchParams?.get("query") || "";
  let before = url.searchParams?.get("before") || "";
  let after = url.searchParams?.get("after") || "";
  let first = url.searchParams?.get("first") || "";

  if (exists(query)) {
    data["query"] = queryBuild(query);
  }
  if (exists(before)) {
    data["before"] = before;
  } else if (exists(after)) {
    data["after"] = after;
  }
  if (exists(first)) {
    data["first"] = parseInt(first) || PAGINATION_LIMIT;
  }
  return data;
}

export const numberGenerator = () => {
  const date = new Date();
  return (
    date.getTime() +
    Math.floor(Math.random() * 5) +
    Math.floor(Math.random() * 10) +
    Math.floor(Math.random() * 100) +
    Math.floor(Math.random() * 100)
  );
};

export function paragraphToHTML(content: any) {
  let html = "";
  try {
    const parsed = JSON.parse(content);

    parsed.children.forEach((node: any) => {
      switch (node.type) {
        case "paragraph":
          html += `<p>`;
          node.children.forEach((item: any) => {
            if (item.type === "text" && item.bold) {
              html += `<strong>${item.value}</strong>` + " ";
            } else if (item.type === "text" && item.italic) {
              html += `<em>${item.value}</em>` + " ";
            } else if (item.type === "text") {
              html += `${item.value}` + " ";
            }
            if (item.type === "link" && item.bold) {
              html +=
                `<a href="${item.url}" target="${item.target}"><strong>${item.children[0].value}</strong></a>` +
                " ";
            } else if (item.type === "link" && item.italic) {
              html +=
                `<a href="${item.url}" target="${item.target}"><em>${item.children[0].value}</em></a>` +
                " ";
            } else if (item.type === "link") {
              html +=
                `<a href="${item.url}" target="${item.target}">${item.children[0].value}</a>` +
                " ";
            }
          });
          html += `</p>`;
          break;
      }
    });
  } catch (error) {}

  return html;
}
export function toHTML(content: any) {
  let html = "";
  try {
    const parsed = JSON.parse(content);

    parsed.children.forEach((node: any) => {
      switch (node.type) {
        case "heading":
          html += `<h${node.level}>${node.children[0].value}</h${node.level}>`;
          break;
        case "list":
          html += `<${
            node.listType === "unordered" ? "ul" : "ol"
          } class="list">`;
          node.children.forEach((item: any) => {
            let temp = "";
            if (_.get(item, "children")) {
              temp += "<li>";
              item.children.map((it) => {
                if (it.type === "link") {
                  temp +=
                    `<a href="${it.url}" target="${it.target}">${it.children[0].value}</a>` +
                    " ";
                } else if (it.type === "link" && it.italic) {
                  temp +=
                    `<a href="${it.url}" target="${it.target}"><em>${it.children[0].value}</em></a>` +
                    " ";
                } else if (item.type === "link") {
                  temp +=
                    `<a href="${it.url}" target="${it.target}">${it.children[0].value}</a>` +
                    " ";
                }
              });
              temp += "</li>";
            }
            if (temp?.replaceAll(" ", "") != "<li></li>") {
              html += temp;
            } else {
              html += `<li>${item.children[0].value} ${_.get(
                item.children,
                "[1].value",
                ""
              )}</li>`;
            }
          });
          html += `<${node.listType === "unordered" ? "/ul" : "/ol"}>`;
          break;
        case "paragraph":
          html += `<p>`;
          node.children.forEach((item: any) => {
            if (item.type === "text" && item.bold) {
              html += `<strong>${item.value}</strong>` + " ";
            } else if (item.type === "text" && item.italic) {
              html += `<em>${item.value}</em>` + " ";
            } else if (item.type === "text") {
              html += `${item.value}` + " ";
            }
            if (item.type === "link" && item.bold) {
              html +=
                `<a href="${item.url}" target="${item.target}"><strong>${item.children[0].value}</strong></a>` +
                " ";
            } else if (item.type === "link" && item.italic) {
              html +=
                `<a href="${item.url}" target="${item.target}"><em>${item.children[0].value}</em></a>` +
                " ";
            } else if (item.type === "link") {
              html +=
                `<a href="${item.url}" target="${item.target}">${item.children[0].value}</a>` +
                " ";
            }
          });
          html += `</p>`;
          break;
      }
    });
  } catch (error) {}

  return html;
}
