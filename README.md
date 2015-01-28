# dns_record_type_json
JSON representation of DNS record types based on http://en.wikipedia.org/wiki/List_of_DNS_record_types#Resource_records

I needed a quick way to map DNS QTYPE values to names and vice versa. After searching online for JSON that and failing to find
what I was looking for, I decided to do a quick scrape of the wikipedia page (http://en.wikipedia.org/wiki/List_of_DNS_record). 

Maybe I'll do one based on http://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml next since it seems be more authoritative. 

# Sample Data
```[
   {
      "type":"A",
      "decimal_value":1,
      "rfc":"RFC 1035[1]",
      "description":"Address record",
      "func":"Returns a 32-bit IPv4 address, most commonly used to map hostnames to an IP address of the host, but it is also used for DNSBLs, storing subnet masks in RFC 1101, etc."
   },
   {
      "type":"AAAA",
      "decimal_value":28,
      "rfc":"RFC 3596[2]",
      "description":"IPv6 address record",
      "func":"Returns a 128-bit IPv6 address, most commonly used to map hostnames to an IP address of the host."
   },
   {
      "type":"AFSDB",
      "decimal_value":18,
      "rfc":"RFC 1183",
      "description":"AFS database record",
      "func":"Location of database servers of an AFS cell. This record is commonly used by AFS clients to contact AFS cells outside their local domain. A subtype of this record is used by the obsolete DCE/DFS file system."
   },
   {
      "type":"APL",
      "decimal_value":42,
      "rfc":"RFC 3123",
      "description":"Address Prefix List",
      "func":"Specify lists of address ranges, e.g. in CIDR format, for various address families. Experimental."
   },
   {
      "type":"CAA",
      "decimal_value":257,
      "rfc":"RFC 6844",
      "description":"Certification Authority Authorization",
      "func":"CA pinning, constraining acceptable CAs for a host/domain"
   }```
