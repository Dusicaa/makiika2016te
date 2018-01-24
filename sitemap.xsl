<?xml version="1.0" encoding="Utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9">
	<xsl:template match="/">
		<html>
			<body>
				<table border="1" width="900px" style="margin:20px auto;">
					<thead>
						<th>Ordinal number</th>
						<th>Location</th>
						<th></th>
						<th>Frequency of moderations</th>
						<th>Priority</th>
					</thead>
					<tbody>
					<xsl:for-each select="sm:urlset/sm:url">
						<tr>
							<td><xsl:value-of select="position()"/></td>
							<td><xsl:value-of select="sm:loc"/></td>
							<td><xsl:value-of select="sm:lastmod"/></td>
							<td><xsl:value-of select="sm:changefreq"/></td>
							<td><xsl:value-of select="sm:priority"/></td>
						</tr>
					</xsl:for-each>
					</tbody>
				</table>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>